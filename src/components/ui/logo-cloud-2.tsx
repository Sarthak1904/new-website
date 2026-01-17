"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { logoDrift } from "@/lib/motions";

type Logo = {
    src: string;
    alt: string;
};

const logos: Logo[] = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "PyTorch" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
    { src: "https://simpleicons.org/icons/keras.svg", alt: "Keras" }, // Keras not in devicon standard or issues, using simpleicons or fallback
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", alt: "Scikit-learn" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", alt: "OpenCV" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", alt: "Jenkins" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg", alt: "Azure DevOps" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", alt: "Apache Kafka" },
    // RabbitMQ not in main devicon list sometimes, checking fallback
    { src: "https://simpleicons.org/icons/rabbitmq.svg", alt: "RabbitMQ" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", alt: "Oracle Database" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://simpleicons.org/icons/apachecassandra.svg", alt: "Apache Cassandra" }, // Cassandra fallback
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", alt: "Google Cloud Platform" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", alt: "Microsoft Azure" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", alt: "GraphQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", alt: ".NET" },
];

export function LogoCloud({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "group relative flex w-full flex-col border-y bg-background md:flex-row overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Layered Atmospheric Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Soft Mesh Gradients - Increased Intensity */}
                <div className="absolute -top-[60%] -left-[15%] w-[60%] h-[120%] bg-purple-500/15 blur-[100px] rounded-full animate-pulse [animation-duration:8s]" />
                <div className="absolute -bottom-[60%] -right-[15%] w-[60%] h-[120%] bg-blue-500/15 blur-[100px] rounded-full animate-pulse [animation-duration:10s]" />
                <div className="absolute top-[10%] left-[20%] w-[50%] h-[80%] bg-orange-500/10 blur-[120px] rounded-full" />

                {/* Background Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>

            {/* Static Heading Section */}
            <div className="relative z-10 flex shrink-0 items-center justify-center border-b bg-muted/20 backdrop-blur-sm p-6 md:w-1/4 md:border-b-0 md:border-r">
                <h2 className="max-w-[160px] text-center font-medium text-base leading-tight text-muted-foreground/80 tracking-tight md:text-left">
                    <span className="font-semibold text-primary block text-lg">My Tech Stack</span>
                </h2>

                {/* Decorative Plus Icon at intersection */}
                <PlusIcon className="absolute -right-3 -bottom-3 z-20 size-6 text-border hidden md:block" strokeWidth={1} />
            </div>

            {/* Marquee Section */}
            <div className="relative z-10 flex flex-1 flex-col overflow-hidden py-3">
                {/* Row 1 */}
                <div className="flex w-full overflow-hidden border-b border-border/50 py-4 last:border-b-0">
                    <motion.div
                        variants={logoDrift}
                        animate="animate"
                        className="flex w-max shrink-0 items-center justify-around gap-16 px-8"
                    >
                        {[...logos.slice(0, 6), ...logos.slice(0, 6), ...logos.slice(0, 6), ...logos.slice(0, 6)].map((logo, i) => (
                            <LogoImage key={`row1-${i}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 */}
                <div className="flex w-full overflow-hidden py-4">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex w-max shrink-0 items-center justify-around gap-16 px-8"
                    >
                        {[...logos.slice(6), ...logos.slice(6), ...logos.slice(6), ...logos.slice(6)].map((logo, i) => (
                            <LogoImage key={`row2-${i}`} logo={logo} />
                        ))}
                    </motion.div>
                </div>

                {/* Side Masks with a smoother, slightly wider fade */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />
            </div>
        </div>
    );
}

function LogoImage({ logo }: { logo: Logo }) {
    return (
        <div className="group/logo relative flex h-12 w-28 items-center justify-center transition-all duration-300 hover:scale-110">
            <img
                alt={logo.alt}
                className="h-full w-full object-contain transition-all"
                src={logo.src}
            />
        </div>
    );
}
