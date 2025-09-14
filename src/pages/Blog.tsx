import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Eye } from "lucide-react"

const Blog = () => {
  const { t } = useTranslation()

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.springWaterBenefits.title', 'The Benefits of Drinking Natural Spring Water'),
      excerpt: t('blog.posts.springWaterBenefits.excerpt', 'Discover why natural spring water is the perfect choice for your daily hydration needs and overall health.'),
      author: "Dr. Sarah Ahmed",
      date: "2024-01-15",
      category: t('blog.categories.health', 'Health'),
      readTime: `5 ${t('blog.minRead', 'min read')}`,
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: t('blog.posts.summerHydration.title', 'How to Stay Hydrated During Summer'),
      excerpt: t('blog.posts.summerHydration.excerpt', 'Essential tips and tricks to maintain proper hydration levels during the hot summer months.'),
      author: "Ahmed Hassan",
      date: "2024-01-10",
      category: t('blog.categories.tips', 'Tips'),
      readTime: `3 ${t('blog.minRead', 'min read')}`,
      views: 892,
      featured: false
    },
    {
      id: 3,
      title: t('blog.posts.waterPurification.title', 'The Science Behind Water Purification'),
      excerpt: t('blog.posts.waterPurification.excerpt', 'Learn about the advanced filtration and purification processes that ensure your water is safe and clean.'),
      author: "Mohamed Ali",
      date: "2024-01-05",
      category: t('blog.categories.science', 'Science'),
      readTime: `7 ${t('blog.minRead', 'min read')}`,
      views: 654,
      featured: false
    },
    {
      id: 4,
      title: t('blog.posts.sustainablePractices.title', 'Sustainable Water Delivery Practices'),
      excerpt: t('blog.posts.sustainablePractices.excerpt', 'How we\'re committed to environmental sustainability while delivering premium water to your doorstep.'),
      author: "Fatima Omar",
      date: "2023-12-28",
      category: t('blog.categories.environment', 'Environment'),
      readTime: `4 ${t('blog.minRead', 'min read')}`,
      views: 423,
      featured: false
    },
    {
      id: 5,
      title: t('blog.posts.qualityTesting.title', 'Water Quality Testing: What You Need to Know'),
      excerpt: t('blog.posts.qualityTesting.excerpt', 'Understanding the rigorous testing processes that ensure every bottle meets the highest quality standards.'),
      author: "Dr. Khalid Ibrahim",
      date: "2023-12-20",
      category: t('blog.categories.quality', 'Quality'),
      readTime: `6 ${t('blog.minRead', 'min read')}`,
      views: 789,
      featured: true
    },
    {
      id: 6,
      title: t('blog.posts.workplaceHydration.title', 'Office Hydration: Boosting Workplace Productivity'),
      excerpt: t('blog.posts.workplaceHydration.excerpt', 'How proper hydration in the workplace can improve focus, energy, and overall employee well-being.'),
      author: "Nour Abdel",
      date: "2023-12-15",
      category: t('blog.categories.business', 'Business'),
      readTime: `4 ${t('blog.minRead', 'min read')}`,
      views: 567,
      featured: false
    }
  ]

  const categories = [
    t('blog.categories.all', 'All'),
    t('blog.categories.health', 'Health'),
    t('blog.categories.tips', 'Tips'),
    t('blog.categories.science', 'Science'),
    t('blog.categories.environment', 'Environment'),
    t('blog.categories.quality', 'Quality'),
    t('blog.categories.business', 'Business')
  ]

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background to-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            {t('blog.title', 'Blog')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle', 'Stay informed with the latest insights about water quality, health benefits, and industry news.')}
          </p>
        </div>
      </section>


      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">{t('blog.featured', 'Featured Articles')}</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative">
                  <Badge className="absolute top-4 left-4 bg-primary">{t('products.popular', 'Featured')}</Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                      {t('blog.readMore', 'Read More')} <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">{t('blog.allArticles', 'All Articles')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-md transition-all duration-300">
                <div className="h-32 bg-gradient-to-br from-primary/5 to-accent/5 relative">
                  <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <span>{post.readTime}</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs h-8">
                      {t('blog.read', 'Read')} <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-water py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('blog.newsletter.title', 'Stay Updated')}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {t('blog.newsletter.description', 'Subscribe to our newsletter to get the latest articles and water industry insights delivered to your inbox.')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('blog.newsletter.placeholder', 'Enter your email')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              {t('blog.newsletter.subscribe', 'Subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog