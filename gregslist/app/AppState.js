import { House } from './models/House.js'
import { Job } from './models/Job.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  houses = [
    new House({
      bedrooms: 3,
      bathrooms: 2,
      price: 300000,
      year: 2025,
      sqft: 5,
      address: '123 Main St, Springfield, USA',
      description: 'A beautiful house in the suburbs.',
      imgUrl: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    new House({
      bedrooms: 4,
      bathrooms: 3,
      price: 450000,
      year: 2010,
      sqft: 2500,
      address: '456 Elm St, Springfield, USA',
      description: 'A spacious house with a large backyard.',
      imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }),
    new House({
      bedrooms: 2,
      bathrooms: 1,
      price: 200000,
      year: 1995,
      sqft: 350,
      address: '789 Oak St, Springfield, USA',
      description: 'A cozy starter home.',
      imgUrl: 'https://images.unsplash.com/photo-1580243981343-ca4d8f0143c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    })
  ]

  jobs = [
    new Job({
      title: 'Software Monkey',
      company: 'Tech Corp',
      rate: 50,
      imgIconUrl: "https://images.unsplash.com/photo-1691440599496-4ae4378799eb?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Develop and maintain software applications.',
      hours: 40,
      location: 'Remote'
      }),
    new Job({
      title: 'Data Analyst',
      company: 'Data Inc',
      rate: 40,
      imgIconUrl: "https://images.unsplash.com/photo-1701500096456-28186c4a306d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Analyze and interpret complex data sets.',
      hours: 35,
      location: 'On-site'
    }),
    new Job({
      title: 'Project Manager',
      company: 'Business Solutions',
      rate: 60,
      imgIconUrl: "https://images.unsplash.com/photo-1672268931087-9384cca148d8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: 'Oversee and manage projects from start to finish.',
      hours: 45,
      location: 'Hybrid'
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState());

console.log("AppState", AppState);