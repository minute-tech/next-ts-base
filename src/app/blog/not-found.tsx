// The not-found file is used to render UI when the notFound function is thrown within a route segment.
export default function NotFound() {
    return (
        <>
            <h2>Blog Not Found</h2>
            <p>Could not find requested resource</p>
        </>
    );
}