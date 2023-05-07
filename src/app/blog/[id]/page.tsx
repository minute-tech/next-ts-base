
export default function Page({ params }: {
    params: { id: string };
}) {
    const blogsFromDb = [
        {
            id: "1",
            title: "Blog 1; Beginners Guide",
            content: `This is blog 1. Laborum reprehenderit dolor consequat excepteur fugiat qui aliquip ad enim cillum dolore reprehenderit sunt nostrud. Ullamco qui adipisicing proident nulla reprehenderit magna qui veniam est exercitation tempor. Ea cillum tempor aliqua dolor Lorem aute esse amet. Dolore aliqua nulla sit aliquip deserunt elit. Consectetur do in laboris commodo sit consectetur sit ut id eiusmod id ipsum id.
            Cupidatat aute magna occaecat velit anim sunt velit consequat ipsum cillum incididunt non deserunt. Quis laboris consectetur fugiat ea nostrud voluptate. Ex non commodo do laborum eiusmod minim laborum consequat magna.`,
        },
        {
            id: "2",
            title: "Blog 2; Extended Cut",
            content: `This is blog 2. Lorem esse aliquip exercitation culpa aute commodo qui elit et duis.Amet ullamco nisi excepteur anim 
            cupidatat duis aliqua duis officia reprehenderit occaecat ullamco.Culpa consequat eu sit sint sit ea ad sint ut.Commodo sint pariatur occaecat elit qui et ipsum.`,
        },
        {
            id: "3",
            title: "Blog 3; The Lost Blogs",
            content: `This is blog 3. Qui minim ad non id elit minim aute consequat consectetur. Qui minim ad non id elit minim aute consequat consectetur.Qui minim ad non id elit minim aute consequat consectetur.Qui minim ad non id elit minim aute consequat consectetur.`,
        },
    ];
    
    if (blogsFromDb.find(blog => blog.id === params.id)) {
        const blog = blogsFromDb.find(blog => blog.id === params.id)
        return (
                <div>
                    <h1>{blog?.title ?? ""}</h1>
                    <p>
                        {blog?.content ?? ""}
                    </p>
                    <span>Blog ID: {blog?.id ?? "Blog not found..."}</span>
                </div>
            )
    } else {
        return (
            <div>
                <h1>Blog not found...</h1>
                <p>Blog with ID: {params.id} not found</p>
            </div>
        )
    }
    
}
