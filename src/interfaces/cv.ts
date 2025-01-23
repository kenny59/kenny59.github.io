export type CV = {
	name: string;
	email: string;
	tel: string;
	telFormatted: string;
	location: string;
	website: string;
	github: string;
	experienceLabel: string;
	jobs: CVJobs[];
	skillsLabel: string;
	skills: string[];
	educationLabel: string;
	educations: CVEducations[];
	languagesLabel: string;
	languages: CVLanguages[];
	hobbiesLabel: string;
	hobbies: string;
	highlightedWords: string[];
}
export type CVJobs = {
	company: string;
	from: string;
	to: string;
	position: string;
	location: string;
	jobBullets: string[];
}
export type CVEducations = {
	institution: string;
	major: string;
	location: string;
	from: string;
	to: string;
}
export type CVLanguages = {
	name: string;
	proficiency: number;
}