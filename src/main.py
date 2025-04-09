import os
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from src.api.routes import router as api_router
from dotenv import load_dotenv

load_dotenv()
base_dir = os.path.dirname(os.path.abspath(__file__))
static_dir = os.path.join(base_dir, "static")
app = FastAPI()

app.mount("/static", StaticFiles(directory=static_dir), name="static")
app.include_router(api_router)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)
