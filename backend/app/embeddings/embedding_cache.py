from pathlib import Path
import numpy as np

from app.embeddings.embedding_engine import EmbeddingEngine
from app.services.data_loader import DataLoader
from app.services.candidate_parser import CandidateParser


class EmbeddingCache:

    def __init__(self):

        self.engine = EmbeddingEngine()

        self.loader = DataLoader()

        self.parser = CandidateParser()

        self.cache_dir = (
            Path(__file__).resolve().parents[3]
            / "cache"
        )

        self.cache_dir.mkdir(exist_ok=True)

        self.embedding_file = self.cache_dir / "candidate_embeddings.npy"

        self.id_file = self.cache_dir / "candidate_ids.npy"

    def build(self):

        candidates = self.loader.load_candidates()

        embeddings = []

        ids = []

        print(f"Building embeddings for {len(candidates)} candidates...")

        for i, candidate in enumerate(candidates):

            parsed = self.parser.parse(candidate)

            text = " ".join([
                parsed["summary_text"],
                parsed["career_text"],
                " ".join(parsed["skills"])
            ])

            embedding = self.engine.encode(text)

            embeddings.append(embedding)

            ids.append(parsed["candidate_id"])

            if i % 1000 == 0:
                print(i)

        embeddings = np.array(embeddings)

        np.save(self.embedding_file, embeddings)

        np.save(self.id_file, ids)

        print("Embedding cache built successfully.")

    def load(self):

        embeddings = np.load(
            self.embedding_file
        )

        ids = np.load(
            self.id_file,
            allow_pickle=True
        )

        return ids, embeddings