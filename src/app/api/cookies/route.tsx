import { cookies } from 'next/headers';
 
export async function GET(request: Request) {
  const cookieStore = cookies();

    //   let requestBody = request.body;
    //   const token = cookieStore.get('token');
    const token = "testDougToken";
    
  return new Response('Cookies have been set...', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  });
}