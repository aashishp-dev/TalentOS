class ReasoningGenerator:

    def generate(
        self,
        candidate,
        skill,
        career,
        behavior,
        semantic
    ):

        reasons = []

        if semantic["score"] >= 80:
            reasons.append(
                "Strong semantic alignment with the job requirements."
            )

        if career["score"] >= 70:
            reasons.append(
                "Demonstrates solid production AI and backend engineering experience."
            )

        if skill["score"] >= 60:
            reasons.append(
                "Possesses most of the required technical skills."
            )

        if behavior["score"] >= 70:
            reasons.append(
                "Shows excellent recruiter engagement and profile quality."
            )

        if candidate["open_to_work"]:
            reasons.append(
                "Currently open to new opportunities."
            )

        if candidate["notice"] <= 30:
            reasons.append(
                "Available with a short notice period."
            )

        if not reasons:
            reasons.append(
                "Overall profile aligns well with the hiring requirements."
            )

        return " ".join(reasons)