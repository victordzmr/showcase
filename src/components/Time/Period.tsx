import {DateTime} from 'luxon';

interface PeriodProps {
    start: DateTime
    end: DateTime
}

export default function Period(props: PeriodProps) {
    const opts = props.start.hasSame(props.end, 'year') ? {month: 'long'} : {year: 'numeric', month: 'long'};

    return (
        <>
            {props.start.toLocaleString(opts)} — {props.end.toLocaleString({year: 'numeric', month: 'long'})}
        </>
    );
}
