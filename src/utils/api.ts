// API utility functions for newspaper upload

const API_BASE_URL = 'http://localhost:3000';

export interface UploadResponse {
  success: boolean;
  message: string;
  fileName?: string;
  fileUrl?: string;
}

export interface UploadError {
  success: false;
  message: string;
  error?: string;
}

/**
 * Upload newspaper PDF to backend
 * @param formData - FormData containing the file and date
 * @returns Promise<UploadResponse>
 */
export const uploadNewspaper = async (formData: FormData): Promise<UploadResponse> => {
  console.log('Uploading newspaper to:', `${API_BASE_URL}/upload`);
  try {
    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
      // Note: Don't set Content-Type header when sending FormData
      // The browser will automatically set it with the boundary
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Newspaper uploaded successfully!',
      fileName: data.fileName,
      fileUrl: data.fileUrl,
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Upload failed. Please try again.',
    };
  }
};

/**
 * Get list of uploaded newspapers
 * @returns Promise<Array<{date: string, fileName: string, fileUrl: string}>>
 */
export const getNewspapers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/newspapers`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch newspapers error:', error);
    throw error;
  }
};

/**
 * Delete a newspaper
 * @param fileName - Name of the file to delete
 * @returns Promise<boolean>
 */
export const deleteNewspaper = async (fileName: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/upload/${encodeURIComponent(fileName)}`, {
      method: 'DELETE',
    });

    return response.ok;
  } catch (error) {
    console.error('Delete newspaper error:', error);
    return false;
  }
}; 