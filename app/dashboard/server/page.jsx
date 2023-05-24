import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
// Server side auth protected page
const ServerPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/sign-in?callbackUrl=/dashboard/server")
    }

    return (
        <div>
            <h1>Server Side Auth Protected Page</h1>
            <h2>Logged in as {session?.user?.name ?? "user"}</h2>
            <p>Only accessible to authenticated users.</p>
        </div>
    )
}

export default ServerPage;