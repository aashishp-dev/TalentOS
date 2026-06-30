from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

class EmbeddingEngine:

    def __init__(self):

        print("Loading BGE Embedding Model...")

        self.model = SentenceTransformer(
            "BAAI/bge-small-en-v1.5"
        )

        print("Embedding Model Ready")

    def encode(self, text):

        return self.model.encode(
            text,
            normalize_embeddings=True
        )

    def vector_similarity(
        self,
        embedding1,
        embedding2
    ):

        return float(
            cosine_similarity(
                [embedding1],
                [embedding2]
            )[0][0]
        )