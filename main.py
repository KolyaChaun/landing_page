import os

import requests
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.responses import HTMLResponse, JSONResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

load_dotenv()
BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")


def send_message_to_telegram(name: str, phone: str):
    message = f"Заявка на отримання косультації:\nІм'я: {name}\nТелефон: {phone}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {"chat_id": CHAT_ID, "text": message}
    response = requests.post(url, data=payload)
    return response


@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/submit_form")
async def submit_form(name: str = Form(...), phone: str = Form(...)):
    if name and phone:
        send_message_to_telegram(name, phone)
        return JSONResponse(content={"success": True})
    return JSONResponse(content={"success": False})
