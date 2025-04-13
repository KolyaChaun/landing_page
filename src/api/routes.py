import os

from fastapi import APIRouter, Form, Request
from starlette.responses import HTMLResponse, JSONResponse
from src.services.telegram import (
    send_request_for_consultation_in_telegram,
    enrollment_in_a_course_taobao,
    enrollment_in_a_course_pinduoduo,
)
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse
from pathlib import Path

router = APIRouter()
templates = Jinja2Templates(directory="src/templates")

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR.parent / "static"


# GET
@router.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@router.get("/about_me", name="about_me")
def about_me(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@router.get("/china-study", name="china_study")
def china_study(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@router.get("/reviews", name="reviews")
def reviews(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@router.get("/taobao", name="taobao")
def taobao_program(request: Request):
    return templates.TemplateResponse("taobao.html", {"request": request})


@router.get("/pinduoduo", name="pinduoduo")
def pinduoduo_program(request: Request):
    return templates.TemplateResponse("pinduoduo.html", {"request": request})


# POST
@router.post("/consultation_form")
async def consultation_form(name: str = Form(...), phone: str = Form(...)):
    if name and phone:
        send_request_for_consultation_in_telegram(name, phone)
        return JSONResponse(content={"success": True})
    return JSONResponse(content={"success": False})


@router.post("/sign_up_form_taobao")
async def sign_up_form_taobao(name: str = Form(...), phone: str = Form(...)):
    if name and phone:
        enrollment_in_a_course_taobao(name, phone)
        return JSONResponse(content={"success": True})
    return JSONResponse(content={"success": False})


@router.post("/sign_up_form_pinduoduo")
async def sign_up_form_pinduoduo(name: str = Form(...), phone: str = Form(...)):
    if name and phone:
        enrollment_in_a_course_pinduoduo(name, phone)
        return JSONResponse(content={"success": True})
    return JSONResponse(content={"success": False})


# SEO
# @router.get("/robots.txt", include_in_schema=False)
# def robots_txt():
#     return FileResponse(
#         os.path.join(static_dir, "seo", "robots.txt"), media_type="text/plain"
#     )


@router.get("/sitemap.xml", include_in_schema=False)
def sitemap_xml():
    sitemap_path = STATIC_DIR / "seo" / "sitemap.xml"
    print(f"Looking for sitemap at: {sitemap_path}")  # Это выведет путь в лог
    if sitemap_path.exists():
        return FileResponse(sitemap_path, media_type="application/xml")
    else:
        return JSONResponse({"error": "sitemap.xml not found"}, status_code=404)

