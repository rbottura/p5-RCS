from fpdf import FPDF
from PIL import Image

# Initialize the PDF object
pdf = FPDF()
pdf.add_page()

# Add some text
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt="Hello, this is a sample PDF with text and an image.", ln=True, align='L')

# Add a colored image
image = Image.new('RGB', (100, 50), color = 'blue')
image.save("/mnt/data/sample_image.png")
pdf.image("/mnt/data/sample_image.png", x=10, y=30, w=100)

# Save the PDF
pdf_file_path = "/mnt/data/sample_pdf_with_image.pdf"
pdf.output(pdf_file_path)
