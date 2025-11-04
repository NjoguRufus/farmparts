import { useState, useCallback } from 'react';
import { ConfirmModal } from '../components/ConfirmModal';

interface ConfirmOptions {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'danger' | 'warning' | 'info';
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);
  const [resolvePromise, setResolvePromise] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setOptions(options);
      setIsOpen(true);
      setResolvePromise(() => resolve);
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setIsOpen(false);
    if (options?.onConfirm) {
      options.onConfirm();
    }
    if (resolvePromise) {
      resolvePromise(true);
    }
    setResolvePromise(null);
    setOptions(null);
  }, [options, resolvePromise]);

  const handleCancel = useCallback(() => {
    setIsOpen(false);
    if (options?.onCancel) {
      options.onCancel();
    }
    if (resolvePromise) {
      resolvePromise(false);
    }
    setResolvePromise(null);
    setOptions(null);
  }, [options, resolvePromise]);

  const ConfirmDialog = options ? (
    <ConfirmModal
      isOpen={isOpen}
      title={options.title}
      message={options.message}
      confirmText={options.confirmText}
      cancelText={options.cancelText}
      type={options.type}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  ) : null;

  return { confirm, ConfirmDialog };
};

