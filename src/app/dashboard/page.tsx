import Counter from './Counter'

export default function Dashboard() {
    return (
        <div>
            <h1>DASHBOARD</h1>
            <p>Welcome User!</p>
            <ul>
                <li><a href="/blog">Blog</a></li>
            </ul>
            <Counter />
        </div>
    )
}
  