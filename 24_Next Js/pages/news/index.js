// our-domain.com/news

import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='news/nextjs'>
                        NextJs is a great framework
                    </Link>
                </li>
                <li>Something else</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;