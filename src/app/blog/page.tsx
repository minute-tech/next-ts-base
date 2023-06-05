import { Hr } from "@/styles/misc.ts";

export default function Blog() {
    return (
        <div>
            <h1>BLOG</h1>
            <p>View blogs below:</p>
            <Hr />
            <ul>
                <li><a href="/blog/1">Blog 1</a></li>
                <li><a href="/blog/2">Blog 2</a></li>
                <li><a href="/blog/3">Blog 3</a></li>
            </ul>
        </div>
    )
}
