import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const educationalSections = [
    { id: "basic", title: "Основные сведения", icon: "Building" },
    { id: "structure", title: "Структура и органы управления", icon: "Users" },
    { id: "documents", title: "Документы", icon: "FileText" },
    { id: "education", title: "Образование", icon: "GraduationCap" },
    { id: "leadership", title: "Руководство", icon: "Crown" },
    { id: "staff", title: "Педагогический состав", icon: "User" },
    {
      id: "facilities",
      title: "Материально-техническое обеспечение",
      icon: "Settings",
    },
    {
      id: "paid-services",
      title: "Платные образовательные услуги",
      icon: "CreditCard",
    },
    {
      id: "finance",
      title: "Финансово-хозяйственная деятельность",
      icon: "TrendingUp",
    },
    { id: "vacancies", title: "Вакантные места", icon: "UserPlus" },
    { id: "support", title: "Стипендии и меры поддержки", icon: "Heart" },
    {
      id: "international",
      title: "Международное сотрудничество",
      icon: "Globe",
    },
    { id: "nutrition", title: "Организация питания", icon: "Utensils" },
  ];

  const additionalSections = [
    { id: "methodology", title: "Методическая копилка", icon: "BookOpen" },
    { id: "union", title: "Профсоюз", icon: "Users" },
    { id: "mentorship", title: "Наставничество", icon: "UserCheck" },
  ];

  const ageGroups = [
    { name: "Ясли", age: "1-2 года", color: "bg-green-100 text-green-800" },
    {
      name: "Младшая группа",
      age: "2-3 года",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Средняя группа",
      age: "3-4 года",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "Старшая группа",
      age: "4-6 лет",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  const specialPrograms = [
    {
      name: "Логопед",
      description: "Коррекция речевых нарушений",
      icon: "MessageCircle",
    },
    {
      name: "Психолог",
      description: "Психологическая поддержка детей",
      icon: "Heart",
    },
    { name: "Музыка", description: "Музыкальное развитие", icon: "Music" },
    {
      name: "Дополнительные кружки",
      description: "Творческие и спортивные секции",
      icon: "Star",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="School" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  МДОУ "Детский сад №1"
                </h1>
                <p className="text-sm text-gray-600">Официальный сайт</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => setActiveSection("main")}>
                Главная
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection("info")}>
                Сведения об организации
              </Button>
              <Button variant="ghost">Контакты</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === "main" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Добро пожаловать в наш детский сад!
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Мы создаем безопасную и развивающую среду для каждого ребенка,
                следуя современным образовательным стандартам и требованиям.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/img/a87f6be2-9e55-4850-aa16-7f2ab3404eb9.jpg"
                    alt="Здание детского сада"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/img/59184c28-0bd4-445f-a739-03d7fd37ed7c.jpg"
                    alt="Дети в группе"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Age Groups */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Возрастные группы
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ageGroups.map((group, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge className={group.color}>{group.age}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Special Programs */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Специальные программы
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {specialPrograms.map((program, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon
                            name={program.icon}
                            className="w-5 h-5 text-blue-600"
                          />
                        </div>
                        <CardTitle className="text-lg">
                          {program.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{program.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Access */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Быстрый доступ
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-start space-y-2"
                  onClick={() => setActiveSection("info")}
                >
                  <Icon name="Building" className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold">Сведения об организации</span>
                  <span className="text-sm text-gray-600">
                    Полная информация по 1493 приказу
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-start space-y-2"
                >
                  <Icon name="FileText" className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold">Документы</span>
                  <span className="text-sm text-gray-600">
                    Лицензии, положения, отчеты
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-start space-y-2"
                >
                  <Icon name="Phone" className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold">Контакты</span>
                  <span className="text-sm text-gray-600">
                    Телефоны, адрес, часы работы
                  </span>
                </Button>
              </div>
            </section>
          </div>
        )}

        {activeSection === "info" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Сведения об образовательной организации
              </h2>
              <p className="text-gray-600">
                В соответствии с Приказом Рособрнадзора от 04.08.2023 №1493
              </p>
            </div>

            {/* Educational Sections */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {educationalSections.map((section) => (
                <Card
                  key={section.id}
                  className="hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon
                          name={section.icon}
                          className="w-5 h-5 text-blue-600"
                        />
                      </div>
                      <CardTitle className="text-sm leading-tight">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                    >
                      <Icon name="ArrowRight" className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Дополнительные разделы
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {additionalSections.map((section) => (
                  <Card
                    key={section.id}
                    className="hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Icon
                            name={section.icon}
                            className="w-5 h-5 text-green-600"
                          />
                        </div>
                        <CardTitle className="text-lg">
                          {section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Icon name="ArrowRight" className="w-4 h-4 mr-2" />
                        Перейти
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Information Blocks */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Основная информация
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="nutrition">
                  <AccordionTrigger>Организация питания</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>
                        4-разовое питание: завтрак, второй завтрак, обед,
                        полдник
                      </p>
                      <p>Специальное меню для детей с пищевыми аллергиями</p>
                      <p>
                        Контроль качества продуктов и соблюдение санитарных норм
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="medical">
                  <AccordionTrigger>Медицинское обслуживание</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>Медицинский кабинет с квалифицированной медсестрой</p>
                      <p>Регулярные профилактические осмотры</p>
                      <p>Контроль за здоровьем детей в течение дня</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="schedule">
                  <AccordionTrigger>Режим работы</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <p>Понедельник - Пятница: 7:00 - 19:00</p>
                      <p>Выходные дни: Суббота, Воскресенье</p>
                      <p>
                        Праздничные дни согласно производственному календарю
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Контактная информация
              </h4>
              <p className="text-gray-300">
                г. Москва, ул. Образовательная, д. 1
              </p>
              <p className="text-gray-300">Тел: +7 (495) 123-45-67</p>
              <p className="text-gray-300">Email: info@ds1.ru</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <p className="text-gray-300">Понедельник - Пятница</p>
              <p className="text-gray-300">07:00 - 19:00</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Документы</h4>
              <p className="text-gray-300">
                Лицензия на образовательную деятельность
              </p>
              <p className="text-gray-300">Устав учреждения</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 МДОУ "Детский сад №1". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
