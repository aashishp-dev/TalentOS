import pandas as pd
from pathlib import Path

from app.ranking.ranker import CandidateRanker


class SubmissionGenerator:

    def __init__(self):
        self.ranker = CandidateRanker()

    def generate_submission(self):

        results = self.ranker.rank_candidates(100)

        submission = pd.DataFrame(results)

        submission = submission[
            [
                "candidate_id",
                "rank",
                "score",
                "reasoning"
            ]
        ]

        output_path = (
            Path(__file__).resolve().parents[3]
            / "submission.csv"
        )

        submission.to_csv(
            output_path,
            index=False
        )

        return {
            "saved_to": str(output_path),
            "total_candidates": len(submission)
        }