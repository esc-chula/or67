export interface Class {
	"format": string,
	"day": string,
	"timeStart": string,
	"timeEnd": string,
	"location": string
}

export interface Section {
	"section": number,
	"studentStart": number,
	"studentEnd": number,
	"classes": Class[]
}

export interface Subject {
	"code": string,
	"name": string,
	"lectureCredit": number,
	"midterm": string,
	"final": string,
	"sections": Section[]
}
