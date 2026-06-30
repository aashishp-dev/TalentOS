import json
from pathlib import Path
from typing import List, Dict

import pandas as pd
from docx import Document


class DataLoader:
    def __init__(self):
        # backend/app/services -> backend -> IndiaRunsAI
        self.base_path = Path(__file__).resolve().parents[3]
        self.dataset_path = self.base_path / "dataset"

    def load_candidates(self) -> List[Dict]:
        """
        Load all candidates from candidates.jsonl
        """
        candidates = []

        file_path = self.dataset_path / "candidates.jsonl"

        with open(file_path, "r", encoding="utf-8") as file:
            for line in file:
                candidates.append(json.loads(line))

        return candidates

    def load_job_description(self) -> str:
        """
        Read job_description.docx
        """

        file_path = self.dataset_path / "job_description.docx"

        document = Document(file_path)

        text = []

        for paragraph in document.paragraphs:
            if paragraph.text.strip():
                text.append(paragraph.text)

        return "\n".join(text)

    def load_sample_submission(self):
        """
        Load sample submission format
        """

        file_path = self.dataset_path / "sample_submission.csv"

        return pd.read_csv(file_path)

    def get_dataset_summary(self):
        """
        Return basic information about the dataset.
        """

        candidates = self.load_candidates()
        submission = self.load_sample_submission()
        jd = self.load_job_description()

        return {
            "total_candidates": len(candidates),
            "candidate_fields": list(candidates[0].keys()),
            "submission_columns": submission.columns.tolist(),
            "job_description_characters": len(jd),
        }