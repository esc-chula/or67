import { Subject } from './subject';

export interface Group {
	"groupCode": string,
	"range": { "start": number, "end": number },
	"subjects": Subject[]
}