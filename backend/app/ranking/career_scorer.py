class CareerScorer:

    def score(self, candidate):

        score = 0
        reasons = []

        career = candidate.get("career_history", [])

        career_text = candidate.get("career_text", "").lower()

        # ----------------------------
        # Career Stability
        # ----------------------------

        jobs = len(career)

        if jobs >= 4:
            score += 15
            reasons.append("Strong career progression")
        elif jobs >= 2:
            score += 10

        # ----------------------------
        # Years of Experience
        # ----------------------------

        exp = candidate.get("experience", 0)

        if 5 <= exp <= 9:
            score += 20
            reasons.append("Ideal experience")
        elif exp > 9:
            score += 15
        elif exp >= 3:
            score += 10

        # ----------------------------
        # Production AI Keywords
        # ----------------------------

        ai_keywords = [

            "retrieval",

            "ranking",

            "recommendation",

            "recommendation system",

            "semantic search",

            "vector database",

            "embedding",

            "embeddings",

            "faiss",

            "milvus",

            "pinecone",

            "weaviate",

            "llm",

            "transformer",

            "machine learning",

            "deep learning",

            "nlp",

            "production",

            "real-time",

            "search engine"

        ]

        hits = 0

        for word in ai_keywords:

            if word in career_text:

                hits += 1

        score += min(hits * 3, 30)

        if hits:
            reasons.append(
                f"Production AI experience ({hits})"
            )

        # ----------------------------
        # Leadership
        # ----------------------------

        leadership = [

            "lead",

            "manager",

            "architect",

            "principal",

            "staff engineer"

        ]

        for word in leadership:

            if word in career_text:

                score += 5

                reasons.append("Leadership experience")

                break

        # ----------------------------
        # Product Engineering
        # ----------------------------

        product = [

            "product",

            "platform",

            "search",

            "recommendation",

            "marketplace"

        ]

        if any(word in career_text for word in product):

            score += 10

            reasons.append("Product engineering background")

        return {
            "score": min(score, 100),
            "reason": ", ".join(reasons)
        }