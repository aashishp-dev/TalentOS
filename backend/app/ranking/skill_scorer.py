from app.services.jd_parser import JDParser


class SkillScorer:

    def __init__(self):
        self.jd = JDParser().parse()

    def score(self, candidate):

        required = self.jd["required_skills"]
        preferred = self.jd["preferred_skills"]

        candidate_skills = set(candidate.get("skills", []))
        skill_details = candidate.get("skill_details", {})

        score = 0
        reasons = []

        required_matches = 0
        preferred_matches = 0

        # Required Skills
        for skill in required:

            if skill in candidate_skills:

                required_matches += 1

                score += 10

                details = skill_details.get(skill, {})

                proficiency = details.get("proficiency", "").lower()

                if proficiency == "expert":
                    score += 4
                elif proficiency == "advanced":
                    score += 2

                endorsements = details.get("endorsements", 0)
                duration = details.get("duration", 0)

                score += min(endorsements / 20, 3)
                score += min(duration / 24, 3)

        # Preferred Skills
        for skill in preferred:

            if skill in candidate_skills:

                preferred_matches += 1
                score += 5

        reasons.append(
            f"{required_matches} required skills matched"
        )

        if preferred_matches:
            reasons.append(
                f"{preferred_matches} preferred skills matched"
            )

        return {
            "score": min(score, 100),
            "reason": ", ".join(reasons)
        }