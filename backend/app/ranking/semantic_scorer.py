from app.embeddings.embedding_engine import EmbeddingEngine
from app.services.jd_parser import JDParser


class SemanticScorer:

    def __init__(self):
        self.embedding = EmbeddingEngine()

        self.jd = JDParser().parse()

        self.jd_text = " ".join(
            self.jd["required_skills"]
            + self.jd["preferred_skills"]
        )

        # Compute once
        self.jd_embedding = self.embedding.encode(
            self.jd_text
        )

    def score(self, candidate):

        candidate_text = " ".join([
            candidate.get("summary_text", ""),
            candidate.get("career_text", ""),
            " ".join(candidate.get("skills", []))
        ])

        candidate_embedding = self.embedding.encode(
            candidate_text
        )

        similarity = self.embedding.vector_similarity(
            self.jd_embedding,
            candidate_embedding
        )

        score = similarity * 100

        return {
            "score": round(score, 2),
            "reason": f"Semantic similarity {similarity:.2f}"
        }