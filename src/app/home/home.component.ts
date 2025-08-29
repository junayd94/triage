import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  text: string;
  options: string[] | null;
  selected: string[];
  type: 'multi' | 'bp' | 'pain' | 'spo2' | 'single';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {
  constructor(private router: Router) { }

  currentQuestionIndex = 0;
  loading = false;
  bpReading = '';
  spo2Reading = '';
  painScore = '';
  finished = false;

  questions: Question[] = [
    {
      text: 'Select all symptoms you are experiencing:',
      options: [
        'Airway obstructed',
        'Breathing inadequate',
        'Tachycardia',
        'Bradycardia',
        'Severe pallor',
        'Diaphoresis',
        'Tachypnoea',
        'Severe dyspnoea',
        'Stroke scale',
        'Severe chest pain',
        'Altered mental status',
        'Polytrauma',
        'Severe pain',
        'Irritable patient'
      ],
      selected: [],
      type: 'multi'
    },
    {
      text: 'Measure your Blood Pressure:',
      options: null,
      selected: [],
      type: 'bp'
    },
    {
      text: 'Measure your SpO₂:',
      options: null,
      selected: [],
      type: 'spo2'
    },
    {
      text: 'Rate your pain score (1-10):',
      options: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
      selected: [],
      type: 'pain'
    },
    // {
    //   text: 'How do you feel today?',
    //   options: ['Good', 'Okay', 'Not Well'],
    //   selected: [],
    //   type: 'single'
    // }
  ];

  selectOption(option: string) {
    const question = this.questions[this.currentQuestionIndex];

    if (question.type === 'multi') {
      if (question.selected.includes(option)) {
        question.selected = question.selected.filter(o => o !== option);
      } else {
        question.selected.push(option);
      }
    } else if (question.type === 'pain') {
      question.selected = [option];
      this.painScore = option;
    } else {
      question.selected = [option];
    }
  }

  startMeasurement() {
    this.loading = true;
    const type = this.questions[this.currentQuestionIndex].type;

    setTimeout(() => {
      if (type === 'bp') this.bpReading = '120/80 mmHg';
      if (type === 'spo2') this.spo2Reading = '95%';
      this.loading = false;
    }, 5000);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finished = true;
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) this.currentQuestionIndex--;
  }

  isNextDisabled(): boolean {
    const q = this.questions[this.currentQuestionIndex];
    if (q.type === 'bp' || q.type === 'spo2') return false;
    if (q.type === 'multi') return false;
    return q.selected.length === 0;
  }

  getResultMessage(): string {
    // Placeholder for actual conditional logic
    if (+this.bpReading.split('/')[0] > 140 || +this.spo2Reading.replace('%', '') < 94) return 'Please go to Red Box';
    if (+this.painScore >= 7) return 'Please go to Yellow Box';
    return 'Please go to Green Box';
  }

  getSelectedIssues(): string {
    const multiQ = this.questions.find(q => q.type === 'multi');
    return multiQ ? multiQ.selected.join(', ') : '';
  }

  startOver() {
    // Reset everything
    this.bpReading = '';
    this.spo2Reading = '';
    this.painScore = '';
    this.finished = false;
    this.currentQuestionIndex = 0;
    this.questions.forEach(q => q.selected = []);

    // Navigate back to welcome screen
    this.router.navigate(['/welcome']);
  }
}
