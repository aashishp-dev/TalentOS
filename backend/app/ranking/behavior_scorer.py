class BehaviorScorer:

    def score(self, candidate):

        score = 0
        reasons = []

        # ----------------------------
        # GitHub Activity
        # ----------------------------
        github = candidate.get("github", 0)

        if github >= 80:
            score += 20
            reasons.append("Excellent GitHub activity")
        elif github >= 60:
            score += 15
        elif github >= 40:
            score += 10
        elif github >= 20:
            score += 5

        # ----------------------------
        # Recruiter Response Rate
        # ----------------------------
        response = candidate.get("response_rate", 0)

        if response >= 0.9:
            score += 20
            reasons.append("High recruiter response")
        elif response >= 0.75:
            score += 15
        elif response >= 0.5:
            score += 10
        elif response >= 0.3:
            score += 5

        # ----------------------------
        # Interview Completion
        # ----------------------------
        completion = candidate.get("completion", 0)

        score += completion * 15

        if completion >= 0.9:
            reasons.append("Excellent interview completion")

        # ----------------------------
        # Profile Completeness
        # ----------------------------
        profile = candidate.get("profile_score", 0)

        score += profile / 10

        # ----------------------------
        # Saved by Recruiters
        # ----------------------------
        saved = candidate.get("saved", 0)

        score += min(saved, 10)

        # ----------------------------
        # Search Visibility
        # ----------------------------
        search = candidate.get("search", 0)

        score += min(search / 100, 5)

        # ----------------------------
        # Open to Work
        # ----------------------------
        if candidate.get("open_to_work", False):
            score += 5
            reasons.append("Open to work")

        # ----------------------------
        # Notice Period
        # ----------------------------
        notice = candidate.get("notice", 180)

        if notice <= 30:
            score += 5
            reasons.append("Immediate availability")
        elif notice <= 60:
            score += 3

        # ----------------------------
        # Relocation
        # ----------------------------
        if candidate.get("relocate", False):
            score += 3

        return {
            "score": min(round(score, 2), 100),
            "reason": ", ".join(reasons)
        }