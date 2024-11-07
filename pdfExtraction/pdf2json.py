import fitz  # PyMuPDF
import os
import json

def extract_text_and_images(pdf_path, output_dir='extracted_images'):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Open the PDF
    document = fitz.open(pdf_path)
    
    # List to store extracted elements
    data = {"pages": []}

    # Loop through each page
    for page_num in range(len(document)):
        page = document.load_page(page_num)  # Load page

        page_data = {
            "page_number": page_num + 1,
            "text": [],
            "images": []
        }

        # Extract text with coordinates
        text_instances = page.get_text("dict")["blocks"]
        for block in text_instances:
            if block['type'] == 0:  # Block type 0 corresponds to text
                for line in block["lines"]:
                    for span in line["spans"]:
                        page_data["text"].append({
                            "text": span["text"],  # The actual text
                            "bbox": span["bbox"],  # Bounding box coordinates [x0, y0, x1, y1]
                        })

        # Extract images with coordinates
        image_list = page.get_images(full=True)
        for img in image_list:
            xref = img[0]  # Image reference ID
            img_bbox = img[1]  # Coordinates of the image: (x0, y0, x1, y1)
            base_image = document.extract_image(xref)  # Extract image data
            
            # Save image to a file
            image_bytes = base_image["image"]
            image_filename = f"{output_dir}/image_{xref}.png"
            with open(image_filename, "wb") as img_file:
                img_file.write(image_bytes)

            # Store the file path in the JSON
            page_data["images"].append({
                "xref": xref,  # Image reference
                "bbox": img_bbox,  # Coordinates of the image
                "image_url": image_filename  # Path to the saved image file
            })

        # Add page data to the pages list
        data["pages"].append(page_data)
    
    # Return the data in JSON format
    return data


def save_data_to_json(data, output_file):
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, indent=4)

# Example usage:
pdf_path = 'a4_pdf.pdf'  # Replace with your PDF path
output_dir = 'extracted_images'
output_file = 'extracted_data.json'

# Extract the data from the PDF
extracted_data = extract_text_and_images(pdf_path, output_dir)

# Save the extracted data into a JSON file
save_data_to_json(extracted_data, output_file)

print(f"Data has been extracted and saved to {output_file}")
