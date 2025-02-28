from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Подключаем папку со статическими файлами
app.mount("/static", StaticFiles(directory="static"), name="static")

# Подключаем папку с шаблонами
templates = Jinja2Templates(directory="templates")


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/submit-form/")
async def submit_form(name: str = Form(...), phone: str = Form(...)):
    # Тут можно добавить обработку данных (например, сохранить в БД)
    return {"message": f"Спасибо, {name}! Мы свяжемся с вами по номеру {phone}."}
