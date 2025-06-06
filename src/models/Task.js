import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['personal', 'work', 'shopping', 'health', 'finance', 'education', 'other'],
    default: 'personal',
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,
    default: null,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
}, {
  timestamps: true,
});

// Create index for better search performance
TaskSchema.index({ title: 'text', description: 'text' });
TaskSchema.index({ userId: 1, status: 1 });
TaskSchema.index({ userId: 1, category: 1 });

// Prevent re-compilation of model
export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
