import os
import requests
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")


def send_request_for_consultation_in_telegram(name: str, phone: str):
    message = f"Заявка на отримання косультації:\nІм'я: {name}\nТелефон: {phone}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {"chat_id": CHAT_ID, "text": message}
    response = requests.post(url, data=payload)
    return response


def enrollment_in_a_course_taobao(name: str, phone: str):
    message = f"Запис на курс Taobao:\nІм'я: {name}\nТелефон: {phone}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {"chat_id": CHAT_ID, "text": message}
    response = requests.post(url, data=payload)
    return response


def enrollment_in_a_course_pinduoduo(name: str, phone: str):
    message = f"Запис на курс Pinduoduo:\nІм'я: {name}\nТелефон: {phone}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {"chat_id": CHAT_ID, "text": message}
    response = requests.post(url, data=payload)
    return response
