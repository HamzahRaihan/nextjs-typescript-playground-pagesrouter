import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import withAuth from './middleware/withAuth';

export function AuthMiddleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(AuthMiddleware, ['/profile', '/product']);

// export const config = {
//   matcher: '/product',
// };
