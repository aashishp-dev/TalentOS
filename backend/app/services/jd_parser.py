import re

from app.services.data_loader import DataLoader


class JDParser:

    def __init__(self):
        self.loader = DataLoader()

    def parse(self):

        jd = self.loader.load_job_description()

        jd_lower = jd.lower()

        required_skills = [
            "python",
            "embeddings",
            "retrieval",
            "ranking",
            "llm",
            "faiss",
            "vector",
            "evaluation",
            "search",
            "machine learning"
        ]

        preferred_skills = [
            "lora",
            "qlora",
            "peft",
            "xgboost",
            "opensource",
            "marketplace",
            "distributed systems"
        ]

        found_required = []

        for skill in required_skills:
            if skill in jd_lower:
                found_required.append(skill)

        found_preferred = []

        for skill in preferred_skills:
            if skill in jd_lower:
                found_preferred.append(skill)

        years = re.findall(r"\d+\s*[-–]\s*\d+\s*years", jd_lower)

        return {

            "required_skills": found_required,

            "preferred_skills": found_preferred,

            "experience": years,

            "requires_relocation":
                "relocate" in jd_lower,

            "startup":
                "startup" in jd_lower,

            "leadership":
                "mentor" in jd_lower,

            "product":
                "product" in jd_lower,

            "culture":
                [
                    "ownership",
                    "ship fast",
                    "async",
                    "experimentation"
                ]
        }