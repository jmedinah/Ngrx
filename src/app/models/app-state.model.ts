import { Row } from './row.model';
import { Statistics } from './statistics.model';

export interface AppState {
	rows: Row[];
	statistics: Statistics;
}
