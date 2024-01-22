import { assert } from 'console';
import users from '@/app/api/student.json';
import { json } from 'stream/consumers';

// You need parentheses around the condition in the assert statement
assert({ type: 'json' });

console.log(users);

// const v_users = JSON.parse(users);

// console.log(v_users);

export default function TestJson() {
  return (
    <div>
      {users.map((obj)=>obj.name)}
    </div>
  );
}
