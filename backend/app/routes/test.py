from fastapi import APIRouter

from app.services.data_loader import DataLoader

router = APIRouter()

loader = DataLoader()


@router.get("/dataset-info")
def dataset_info():
    return loader.get_dataset_summary()