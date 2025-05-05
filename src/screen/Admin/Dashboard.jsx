import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCustomers } from '../../api/auth';


const Dashboard = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch total users and customers
                // const { count: userCount } = await getUsers();
                const { count: customerCount } = await getCustomers(1, 1); // Fetch only count

                // Update stats
                setStats([
                    // {
                    //     title: 'Total Users',
                    //     value: userCount,
                    //     icon: Users,
                    //     change: '+5%', // Example change value
                    //     changeType: 'positive'
                    // },
                    {
                        title: 'Total Customers',
                        value: customerCount,
                        icon: Car,
                        change: '+12.5%',
                        changeType: 'positive'
                    },
                    // {
                    //     title: 'Monthly Growth',
                    //     value: '15.2%',
                    //     icon: TrendingUp,
                    //     change: '+4.3%',
                    //     changeType: 'positive'
                    // }
                ]);
            } catch (error) {
                console.error('Error fetching stats:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Loading state
    }

    return (
        <div className="p-4">
            {/* <AdminHeader /> */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-6"
            >
                Dashboard Overview
            </motion.h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <stat.icon className="h-4 w-4 text-gray-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className={`text-xs ${stat.changeType === 'positive'
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                    }`}>
                                    {stat.change} from last month
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

