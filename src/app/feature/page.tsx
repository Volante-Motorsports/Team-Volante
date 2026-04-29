import { redirect } from 'next/navigation'

export const metadata = {
  title: '3D Buggy Interaction - Team Volante',
  description: 'Interactive 3D model of Team Volante\'s racing buggy'
}

export default function FeaturePage() {
  redirect('https://studio.tripo3d.ai/3d-model/8680ff25-6bad-4dc2-a542-a5d2a2c8b312?invite_code=S85NMR')
}