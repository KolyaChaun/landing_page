import requests
from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from starlette.responses import JSONResponse, HTMLResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

BOT_TOKEN = '7208917368:AAGm6C4oKKDtpmY0JsNdDjLpJ7fuYxc3rDQ'
CHAT_ID = '665565317'

def send_message_to_telegram(name: str, phone: str):
    message = f"Новая заявка:\nИмя: {name}\nТелефон: {phone}"
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        'chat_id': CHAT_ID,
        'text': message
    }
    response = requests.post(url, data=payload)
    return response

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/submit_form")
async def submit_form(request: Request, name: str = Form(...), phone: str = Form(...)):
    if name and phone:
        send_message_to_telegram(name, phone)
        return JSONResponse(content={"success": True})
    return JSONResponse(content={"success": False})



