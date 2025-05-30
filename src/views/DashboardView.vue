<template>
  <div class="d-flex">
    <Sidebar />

    <v-main class="bg-grey-lighten-4">
      <v-container fluid class="pa-6">
        <!-- Header -->
        <DashboardHeader :user="user" />

        <!-- Stats Cards -->
        <StatsCards :stats="stats" class="mb-8" />

        <!-- Charts Section -->
        <v-row class="mb-8">
          <v-col cols="12" lg="6">
            <CategoryChart :data="categoryData" />
          </v-col>
          <v-col cols="12" lg="6">
            <WeeklyActivityChart :data="weeklyData" />
          </v-col>
        </v-row>

        <!-- Bottom Section -->
        <v-row>
          <v-col cols="12" lg="8">
            <UpcomingTasks :tasks="upcomingTasks" />
          </v-col>
          <v-col cols="12" lg="4">
            <ProductivityTrend :data="productivityData" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue'
import DashboardHeader from '../components/dashboard/DashboardHeader.vue'
import StatsCards from '../components/dashboard/StatsCards.vue'
import CategoryChart from '../components/dashboard/CategoryChart.vue'
import WeeklyActivityChart from '../components/dashboard/WeeklyActivityChart.vue'
import UpcomingTasks from '../components/dashboard/UpcomingTasks.vue'
import ProductivityTrend from '../components/dashboard/ProductivityTrend.vue'

export default {
  name: 'DashboardPage',
  components: {
    Sidebar,
    DashboardHeader,
    StatsCards,
    CategoryChart,
    WeeklyActivityChart,
    UpcomingTasks,
    ProductivityTrend,
  },
  data() {
    return {
      user: null,
      tasks: [],
      categoryData: [
        { name: 'Work', value: 12, color: '#3B82F6' },
        { name: 'Personal', value: 8, color: '#10B981' },
        { name: 'Shopping', value: 5, color: '#F59E0B' },
        { name: 'Health', value: 3, color: '#EF4444' },
      ],
      weeklyData: [
        { day: 'Mon', completed: 4, created: 6 },
        { day: 'Tue', completed: 6, created: 8 },
        { day: 'Wed', completed: 8, created: 5 },
        { day: 'Thu', completed: 5, created: 7 },
        { day: 'Fri', completed: 9, created: 9 },
        { day: 'Sat', completed: 3, created: 4 },
        { day: 'Sun', completed: 2, created: 3 },
      ],
      productivityData: [
        { month: 'Jan', productivity: 65 },
        { month: 'Feb', productivity: 72 },
        { month: 'Mar', productivity: 68 },
        { month: 'Apr', productivity: 85 },
        { month: 'May', productivity: 92 },
        { month: 'Jun', productivity: 88 },
      ],
    }
  },
  computed: {
    stats() {
      const totalTasks = this.tasks.length
      const completedTasks = this.tasks.filter((task) => task.completed).length
      const pendingTasks = totalTasks - completedTasks
      const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

      return {
        totalTasks,
        completedTasks,
        pendingTasks,
        completionRate: Math.round(completionRate),
      }
    },
    upcomingTasks() {
      return this.tasks
        .filter((task) => !task.completed)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 5)
    },
  },
  created() {
    this.loadUserData()
    this.loadTasks()
  },
  methods: {
    loadUserData() {
      const userData = localStorage.getItem('user')
      if (userData) {
        this.user = JSON.parse(userData)
      }
    },
    loadTasks() {
      const mockTasks = [
        {
          id: 1,
          title: 'Complete project proposal',
          description: 'Finish the Q4 project proposal for client review',
          category: 'Work',
          dueDate: '2024-01-15',
          completed: false,
          priority: 'high',
        },
        {
          id: 2,
          title: 'Buy groceries',
          description: 'Weekly grocery shopping',
          category: 'Personal',
          dueDate: '2024-01-12',
          completed: true,
          priority: 'medium',
        },
        {
          id: 3,
          title: 'Team meeting preparation',
          description: 'Prepare slides for Monday team meeting',
          category: 'Work',
          dueDate: '2024-01-14',
          completed: false,
          priority: 'high',
        },
        {
          id: 4,
          title: 'Gym workout',
          description: 'Evening workout session',
          category: 'Health',
          dueDate: '2024-01-13',
          completed: true,
          priority: 'low',
        },
      ]

      const savedTasks = localStorage.getItem('tasks')
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks)
      } else {
        this.tasks = mockTasks
        localStorage.setItem('tasks', JSON.stringify(mockTasks))
      }
    },
  },
}
</script>
