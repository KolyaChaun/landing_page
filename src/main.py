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


@app.get("/about", name="about")
def about(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/china-study", name="china_study")
def china_study(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/reviews", name="reviews")
def reviews(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/taobao", name="taobao")
def taobao_program(request: Request):
    return templates.TemplateResponse("taobao.html", {"request": request})


@app.get("/pinduoduo", name="pinduoduo")
def pinduoduo_program(request: Request):
    return templates.TemplateResponse("pinduoduo.html", {"request": request})


@app.post("/submit_form")
async def submit_form(name: str = Form(...), phone: str = Form(...)):
    if name and phone:
        send_message_to_telegram(name, phone)
        return JSONResponse(content={"success": True})
    return JSONResponse(content={"success": False})


if __name__ == "__main__":
    import uvicorn

    port = int(
        os.environ.get("PORT", 8080)
    )  # Используем PORT из окружения (или 8080 по умолчанию)
    uvicorn.run(app, host="0.0.0.0", port=port)
