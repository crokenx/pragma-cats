export interface Cat {
  name:                string;
  origin:              string;
  affection_level:     number;
  intelligence:        number;
  reference_image_id:        string;
  weight:              Weight;
  child_friendly:      number;
  dog_friendly:       number;
  energy_level:        number;
  grooming:            number;
  health_issues:       number;
}

export interface Weight {
  imperial: string;
  metric:    string;
}
