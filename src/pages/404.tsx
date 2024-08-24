import styles from '@/styles/404.module.css';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className={styles.error}>
      <Image src="/not_found.svg" alt="not-found" width={500} height={500} />
      <div>404 | Halaman Tidak Ditemukan</div>
    </div>
  );
}
