# capture_and_upload.py
import cv2
import requests

url = 'http://localhost:3001/upload/underwater'

cap = cv2.VideoCapture(0)
ret, frame = cap.read()
cap.release()

if ret:
    filename = 'underwater.jpg'
    cv2.imwrite(filename, frame)

    with open(filename, 'rb') as f:
        files = {'image': f}
        res = requests.post(url, files=files)
        print(res.status_code, res.text)
else:
    print("Gagal mengambil gambar")
