import Link from 'next/link'

export default function FirstPost() {
    return (
    <>
        <h1> First Post </h1>
        <h2>
            <Link href ="/">
                <a>Back to home</a>
            </Link>
        </h2>
        
        <h2>
            <ul>
                <li> My Name: Ji young Mun (문지영)</li>
                <li> My Hobby: Reading book, Watching Youtube, Cooking </li>
                <li> My Age: 21 </li>
                <li> My Favorite Food: Sushi, Noodle </li>
            </ul>
        </h2>
            <h4><i>I Love Hanyang University!!</i></h4>
    </>
    ) 
}
