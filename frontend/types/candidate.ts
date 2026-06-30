export interface Candidate {
  candidate_id: string;

  rank: number;

  score: number;

  reasoning: string;

  confidence: number;

  breakdown: {
    skill: number;
    career: number;
    behavior: number;
    semantic: number;
  };

  profile: {
    name: string;
    email: string;
    experience: number;
    location: string;
    open_to_work: boolean;
    notice: number;
  };

  skills: string[];
}

export interface RankingResponse {
  summary: {
    total_candidates: number;
    average_score: number;
    top_score: number;
  };

  candidates: Candidate[];
}