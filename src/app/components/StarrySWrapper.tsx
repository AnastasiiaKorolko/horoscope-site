"use client";
import dynamic from "next/dynamic";

const LoadingFallback = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#000',
    zIndex: -1
  }} />
);

const StarrySky = dynamic(
  () => import('./StarrySky'),
  { ssr: false, loading: () => <LoadingFallback /> }
);

export default function StarrySkyWrapper() {
  return <StarrySky />;
}
