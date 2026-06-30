from typing import Dict


class CandidateParser:

    def parse(self, candidate: Dict):

        profile = candidate.get("profile", {})
        signals = candidate.get("redrob_signals", {})
        skills = candidate.get("skills", [])
        career = candidate.get("career_history", [])
        education = candidate.get("education", [])

        skill_names = []
        skill_proficiency = {}

        for skill in skills:
            name = skill.get("name", "").lower()

            skill_names.append(name)

            skill_proficiency[name] = {
                "proficiency": skill.get("proficiency", "beginner"),
                "endorsements": skill.get("endorsements", 0),
                "duration": skill.get("duration_months", 0)
            }

        return {

            "candidate_id": candidate.get("candidate_id"),

            "headline": profile.get("headline", ""),

            "summary": profile.get("summary", ""),

            "summary_text": profile.get("summary", ""),

            "experience": profile.get("years_of_experience", 0),

            "current_title": profile.get("current_title", ""),

            "industry": profile.get("current_industry", ""),

            "skills": skill_names,

            "skill_details": skill_proficiency,

            "career_history": career,

            "career_text": " ".join(
                [
                    job.get("title", "") + " " + job.get("description", "")
                    for job in career
                ]
            ),

            "education": education,

            "certifications": candidate.get("certifications", []),

            "languages": candidate.get("languages", []),

            "career_count": len(career),

            "education_count": len(education),

            "github": signals.get("github_activity_score", -1),

            "response_rate": signals.get("recruiter_response_rate", 0),

            "completion": signals.get("interview_completion_rate", 0),

            "profile_score": signals.get("profile_completeness_score", 0),

            "saved": signals.get("saved_by_recruiters_30d", 0),

            "search": signals.get("search_appearance_30d", 0),

            "open_to_work": signals.get("open_to_work_flag", False),

            "notice": signals.get("notice_period_days", 180),

            "relocate": signals.get("willing_to_relocate", False)
        }