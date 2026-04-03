'use client';

import { useState } from 'react';
import styles from './SizeCalculator.module.css';

export default function SizeCalculator() {
  const [h, setH] = useState('');
  const [w, setW] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateSize = (e: React.FormEvent) => {
    e.preventDefault();
    const heightNum = parseInt(h);
    const weightNum = parseFloat(w);

    if (!heightNum || !weightNum) {
      setResult('Vui lòng nhập đầy đủ chiều cao và cân nặng!');
      return;
    }

    let recommended = '';
    // Basic logic mapping based on Taobao size charts
    if (weightNum < 45) {
      recommended = 'XS';
    } else if (weightNum >= 45 && weightNum < 52) {
      recommended = 'S';
    } else if (weightNum >= 52 && weightNum < 58) {
      recommended = 'M';
    } else if (weightNum >= 58 && weightNum < 65) {
      recommended = 'L';
    } else if (weightNum >= 65 && weightNum < 72) {
      recommended = 'XL';
    } else {
      recommended = 'XXL';
    }

    // Minor adjustment for tall people who are slim
    if (heightNum > 165 && weightNum < 50) {
      recommended = 'M (Chú ý chiều dài)';
    }

    setResult(`Gợi ý: Size ${recommended}`);
  };

  return (
    <div className={styles.calculatorCard}>
      <div className={styles.header}>
        <h3>Tư Vấn Size Nhanh</h3>
        <p>Nhập số đo để hệ thống AI (giả định) gợi ý size cơ bản cho bạn</p>
      </div>

      <form onSubmit={calculateSize} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="calc-height">Chiều cao (cm)</label>
          <input
            id="calc-height"
            type="number"
            placeholder="VD: 160"
            value={h}
            onChange={(e) => setH(e.target.value)}
            className={styles.input}
            min="100"
            max="200"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="calc-weight">Cân nặng (kg)</label>
          <input
            id="calc-weight"
            type="number"
            step="0.5"
            placeholder="VD: 48"
            value={w}
            onChange={(e) => setW(e.target.value)}
            className={styles.input}
            min="30"
            max="120"
          />
        </div>
        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
          Xem Kết Quả
        </button>
      </form>

      {result && (
        <div className={styles.resultBox}>
          <strong>{result}</strong>
          <p className={styles.disclaimer}>
            *Đây chỉ là size tham khảo chung. Đừng quên gửi số đo này cho shop qua Messenger để được chốt chính xác 100% trước khi order nhé!
          </p>
        </div>
      )}
    </div>
  );
}
