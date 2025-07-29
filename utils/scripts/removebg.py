# pip install rembg

from rembg import remove
from PIL import Image
import os

input_folder = "new"
output_folder = "no-background"
os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)

        with open(input_path, "rb") as input_file:
            input_data = input_file.read()
            output_data = remove(input_data)

        with open(output_path, "wb") as output_file:
            output_file.write(output_data)

        print(f'Обработан файл {input_path}...')

print("Все изображения обработаны")
